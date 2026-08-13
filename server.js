const express = require('express');
const path = require('path');
const conexion = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Recibir datos de formularios
app.use(express.urlencoded({ extended: true }));

// Ruta pública: catálogo de cursos
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM cursos WHERE estado = 1 ORDER BY id DESC';

  conexion.query(sql, (error, resultados) => {
    if (error) {
      console.error('Error al obtener cursos:', error);
      return res.send('Error al cargar los cursos');
    }

    res.render('home', {
      cursos: resultados
    });
  });
});

// Panel admin: listar cursos
app.get('/admin/cursos', (req, res) => {
  const sql = 'SELECT * FROM cursos ORDER BY id DESC';

  conexion.query(sql, (error, resultados) => {
    if (error) {
      console.error('Error al obtener cursos:', error);
      return res.send('Error al cargar el panel');
    }

    res.render('admin-cursos', {
      cursos: resultados
    });
  });
});

// Formulario para crear curso (DEBE IR ANTES de /:id)
app.get('/admin/cursos/crear', (req, res) => {
  res.render('crear-curso');
});

// Guardar nuevo curso
app.post('/admin/cursos', (req, res) => {
  const {
    titulo,
    descripcion,
    categoria,
    duracion,
    modalidad,
    imagen,
    estado
  } = req.body;

  const sql = `
    INSERT INTO cursos 
    (titulo, descripcion, categoria, duracion, modalidad, imagen, estado)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  conexion.query(
    sql,
    [titulo, descripcion, categoria, duracion, modalidad, imagen, estado],
    (error) => {
      if (error) {
        console.error('Error al crear curso:', error);
        return res.send('Error al guardar el curso');
      }

      res.redirect('/admin/cursos');
    }
  );
});

// Formulario para editar curso
app.get('/admin/cursos/editar/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM cursos WHERE id = ?';

  conexion.query(sql, [id], (error, resultados) => {
    if (error) {
      console.error('Error al buscar curso:', error);
      return res.send('Error al buscar el curso');
    }

    if (resultados.length === 0) {
      return res.send('Curso no encontrado');
    }

    res.render('editar-curso', {
      curso: resultados[0]
    });
  });
});

// Actualizar curso
app.post('/admin/cursos/editar/:id', (req, res) => {
  const id = req.params.id;

  const {
    titulo,
    descripcion,
    categoria,
    duracion,
    modalidad,
    imagen,
    estado
  } = req.body;

  const sql = `
    UPDATE cursos
    SET titulo = ?, descripcion = ?, categoria = ?, duracion = ?, modalidad = ?, imagen = ?, estado = ?
    WHERE id = ?
  `;

  conexion.query(
    sql,
    [titulo, descripcion, categoria, duracion, modalidad, imagen, estado, id],
    (error) => {
      if (error) {
        console.error('Error al editar curso:', error);
        return res.send('Error al editar el curso');
      }

      res.redirect('/admin/cursos');
    }
  );
});

// Eliminar curso
app.post('/admin/cursos/eliminar/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM cursos WHERE id = ?';

  conexion.query(sql, [id], (error) => {
    if (error) {
      console.error('Error al eliminar curso:', error);
      return res.send('Error al eliminar el curso');
    }

    res.redirect('/admin/cursos');
  });
});

// Ruta pública: detalle de un curso
app.get('/detalle/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM cursos WHERE id = ? AND estado = 1';

  conexion.query(sql, [id], (error, resultados) => {
    if (error) {
      console.error('Error al obtener detalle del curso:', error);
      return res.send('Error al cargar el detalle del curso');
    }

    if (resultados.length === 0) {
      return res.send('Curso no encontrado o inactivo');
    }

    res.render('detalle-curso', {
      curso: resultados[0]
    });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});