let log = {
    info: (info) => {
        console.log(`info: ${info}`);
    },
    warning: (warning) => {
        console.log(`warning: ${warning}`);
    },
    error: (error) => {
        console.log(`error: ${error}`);
    }
}

module.exports = log;