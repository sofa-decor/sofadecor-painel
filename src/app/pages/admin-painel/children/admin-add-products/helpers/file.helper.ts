export function fileCovertBase64(file: File): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onerror = () => {
            reader.abort();
            reject(new Error("Error parsing file"));
        };
        reader.onload = function () {
            const bytes = Array.from(new Uint8Array(this.result as ArrayBuffer));

            const base64StringFile = btoa(bytes.map(item => String.fromCharCode(item)).join(""));

            resolve(base64StringFile);
        };
        reader.readAsArrayBuffer(file);
    });
}
