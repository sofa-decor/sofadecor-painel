export const convertBase64 = async (file: File): Promise<string> => {
    return await new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result as string);
        };

        fileReader.onerror = error => {
            reject(error);
        };
    });
};
