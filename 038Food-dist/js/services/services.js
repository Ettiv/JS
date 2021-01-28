const postData = async (url, data) => {
    const res = await fetch(url, { //await - ждёт,выполнения кода,перед тем,как пропустить дальше
        //работает в паре с asynk,которая ставится перед функцией
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`could no fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export {postData};
export {getResourse};