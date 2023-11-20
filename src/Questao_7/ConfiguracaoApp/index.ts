class ConfiguracaoApp {
    private static instance : ConfiguracaoApp
    public adjetivo : string

    public static getInstance() : ConfiguracaoApp {
        if (!ConfiguracaoApp.instance) {
            ConfiguracaoApp.instance = new ConfiguracaoApp()
        }

        return ConfiguracaoApp.instance
    }

    ola(nome : string) {
        console.log("Olá", nome, this.adjetivo);
    }
}

export { ConfiguracaoApp }

//Invocação dos objetos e métodos no arquivo index.ts da pasta main do projeto (src)