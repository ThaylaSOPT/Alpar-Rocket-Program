class Logger {
    log(text) {
        console.log("Logger genérico:", text);
    }
}

class FileLogger extends Logger {
    log(text) {
        console.log("Logger de arquivo:", text);
    }
}

class ConsoleLogger extends Logger {
    log(text) {
        console.log("Logger de console:", text);
    }
}

function createLogger(type) {
    if (type === "console") {
        return new ConsoleLogger();
    } else if (type === "file") {
        return new FileLogger();
    } else {
        return new Logger();
    }
}

const env = "produção";

const logger = createLogger(env === "desenvolvimento" ? "console" : "file");

logger.log("Olá");