import fs from 'fs/promises'; // Importación ES6 para fs.promises

class UsersManager {

  constructor() {
    this.filePath = './Usuarios.json';
  }

  async crearUsuario(usuario) {
    try {
      let usuarios = await this.leerUsuarios();
      usuarios.push(usuario);
      await fs.writeFile(this.filePath, JSON.stringify(usuarios, null, 2));
      console.log('Usuario creado exitosamente!');
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  }
  async leerUsuarios() {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data) || []; 
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        } else {
            console.error('Error al leer usuarios:', error);
            throw error; 
        }
    }
  }
}

export default UsersManager; 