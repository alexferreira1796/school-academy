import * as path from 'path';

class OpenDocumentUseCase {
  execute(link: string) {
    const address = path.dirname(require.main.filename).replace('src', '');
    return `${address}tmp\\${link}`;
  }
}

export { OpenDocumentUseCase };
