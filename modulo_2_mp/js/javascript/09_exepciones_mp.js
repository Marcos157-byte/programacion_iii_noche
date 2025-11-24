console.log("MANEJO DE ERRORES EN TIENDA DE JEANS");


try {
   
    const cliente = JSON.parse('{"nombre":"Carlos", edad:25}');
} catch (e) {
    console.log(" Error detectado al cargar datos de cliente:", e.message);
}


try {
    console.log(" Intentando abrir archivo de inventario...");
    throw new Error("Archivo de inventario no encontrado");
} catch (error) {
    console.log(" Error:", error.message);
} finally {
    console.log(" Finalizó el intento de abrir archivo de inventario");
}