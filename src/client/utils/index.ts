export const debugdata = (data: any) => {
    console.log(JSON.stringify(data, (key, value) => {
        if (typeof value === "string") {
            return value.replace(/\n/g, "\\n");
        }
        return value;
    }, 2))
}

export const sendNUIEvent = (action: string, data: any) => {
    SendNUIMessage({
        action: action,
        data: data
    });
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const requestModel = async (model: string | number): Promise<number> => {
    let modelHash: number = typeof model === 'number' ? model : GetHashKey(model)

    if (!IsModelValid(modelHash)) {
        exports.bl_bridge.notify()({
            title: 'Invalid model!',
            type: 'error',
            duration: 1000
        })

        throw new Error(`attempted to load invalid model '${model}'`);
    }

    if (HasModelLoaded(modelHash)) return modelHash
    
    RequestModel(modelHash);

    const waitForModelLoaded = (): Promise<void> => {
        return new Promise(resolve => {
            const interval = setInterval(() => {
                if (HasModelLoaded(modelHash)) {
                    clearInterval(interval);
                    resolve();
                }
            }, 100);
        });
    };

    await waitForModelLoaded();

    return modelHash;
};


//callback
//https://github.com/overextended/ox_lib/blob/master/package/client/resource/callback/index.ts

const resourceName = GetCurrentResourceName()
const eventTimers: Record<string, number> = {};
const activeEvents: Record<string, (...args: any[]) => void> = {};

function eventTimer(eventName: string, delay: number | null) {
    if (delay && delay > 0) {
        const currentTime = GetGameTimer();

        if ((eventTimers[eventName] || 0) > currentTime) return false;

        eventTimers[eventName] = currentTime + delay;
    }

    return true;
}

onNet(`__ox_cb_${resourceName}`, (key: string, ...args: any) => {
    const resolve = activeEvents[key];
    return resolve && resolve(...args);
});

export function triggerServerCallback<T = unknown>(
    eventName: string,
    delay: number | null,
    ...args: any
): Promise<T> | void {
    if (!eventTimer(eventName, delay)) {
        return;
    }

    let key: string;

    do {
        key = `${eventName}:${Math.floor(Math.random() * (100000 + 1))}`;
    } while (activeEvents[key]);

    emitNet(`__ox_cb_${eventName}`, resourceName, key, ...args);

    return new Promise<T>((resolve) => {
        activeEvents[key] = resolve;
    });
};

//locale
const currentLan = 'br'

export const requestLocale = (resourceSetName: string) => {
    return new Promise((resolve) => {
        const checkResourceFile = () => {
            if (RequestResourceFileSet(resourceSetName)) {
                let localeFileContent = LoadResourceFile(resourceName, `locale/${currentLan}.json`);
                if (!localeFileContent) {
                    console.error(`${currentLan}.json not found in locale, please verify!, we used english for now!`)
                    localeFileContent = LoadResourceFile(resourceName, `locale/en.json`)
                }
                resolve(localeFileContent);
            } else {
                setTimeout(checkResourceFile, 100);
            }
        }
        checkResourceFile();
    });
}

export const locale = async (id: string, ...args: string[]) => {
    const locale = await requestLocale('locale');
    let argIndex = 0;

    const result = locale[id].replace(/%s/g, (match: string) => argIndex < args.length ? args[argIndex] : match);
    return result
}