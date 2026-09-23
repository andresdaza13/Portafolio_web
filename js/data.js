/* Lectura/escritura de proyectos en Firestore. */
import {
  collection, getDocs, addDoc, updateDoc, deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { db } from "./firebase-init.js";

/* Mientras terminas de configurar Firestore (o si la conexión
   falla), el sitio público sigue funcionando con estos datos
   locales — se llama "degradación elegante": el sitio nunca se
   rompe por completo aunque una pieza falle. */
const FALLBACK_PROJECTS = [
  { titulo: "Kata de Arquitectura", anio: "2026", desc: "Diseño de arquitectura de software aplicando el modelo C4 y las vistas 4+1.", stack: "C4 Model · Vistas 4+1", link: "https://github.com/andresdaza13" },
  { titulo: "Clasificación con Redes Neuronales", anio: "2026", desc: "Proyecto de clasificación con RNA, documentado con CRISP-DM en Google Colab.", stack: "Python · scikit-learn · CRISP-DM", link: "https://github.com/andresdaza13" },
  { titulo: "Aprendizaje práctico de SQL / PL-SQL", anio: "2026", desc: "Ejercicios de bases de datos relacionales, consultas avanzadas y procedimientos.", stack: "SQL · PL-SQL", link: "https://github.com/andresdaza13" }
];

export async function getProjects() {
  try {
    const snap = await getDocs(collection(db, "proyectos"));
    if (snap.empty) return FALLBACK_PROJECTS;
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (err) {
    console.warn("Firestore no disponible aún, usando datos locales:", err.message);
    return FALLBACK_PROJECTS;
  }
}

export const addProject    = (p)     => addDoc(collection(db, "proyectos"), p);
export const updateProject = (id, p) => updateDoc(doc(db, "proyectos", id), p);
export const deleteProject = (id)    => deleteDoc(doc(db, "proyectos", id));
