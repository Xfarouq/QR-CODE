async function start() {
    try {
        const data = await fetch('https://worldtimeapi.org/api/timezone/America/New_York');
        if (!data.ok) {
            throw new Error('Bad network');
        }
        const result = await data.json();
        console.log(result); // Log result.time instead of data.time
    } catch (error) {
        console.log('ERROR: ', error);
    }
}

start();