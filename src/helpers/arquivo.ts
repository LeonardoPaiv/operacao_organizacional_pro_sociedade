export function fileToBlob(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const blob = new Blob([reader.result], { type: file.type });
            resolve(blob);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsArrayBuffer(file);
    });
}

export function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result as string);
        } else {
          reject(new Error('Failed to convert Blob to Base64'));
        }
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(blob);
    });
  }
  
  export function downloadFromBase64(base64String: string, fileName: string) {
    // Converte o Base64 string em dados binários
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Cria um objeto Blob com os dados binários
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });

    // Cria uma URL temporária para o objeto Blob
    const url = URL.createObjectURL(blob);

    // Cria um elemento de link para o download
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = fileName;

    // Adiciona o link ao documento
    document.body.appendChild(a);

    // Aciona um clique no link para iniciar o download
    a.click();

    // Libera a URL temporária
    URL.revokeObjectURL(url);

    // Remove o link do documento
    document.body.removeChild(a);

  }