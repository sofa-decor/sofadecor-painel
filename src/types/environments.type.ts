class AppEnvironments {
    constructor(
        readonly GOOGLE_API_KEY: string = import.meta.env.VITE_GOOGLE_API_KEY,
        readonly API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL
    ) {}
}

export const Environments = new AppEnvironments();
