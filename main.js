window.initMap = function() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {lat: -12.016472780409785, lng: -76.9992239557126},
    });

    // Define las coordenadas de las avenidas principales.
    const avenidasCoords = [
        {lat: -12.00703953497959, lng: -77.00849935104476}, // Avenida Los Jardines
        {lat: -11.992097062785232, lng: -77.0082056567645}, // Avenida San Hilarión
        {lat: -12.012792006562911, lng: -77.0074949035386}, // Avenida Los Tusilagos
        {lat: -11.996407782761576, lng: -77.00522134586753}, // Avenida Los Postes
        {lat: -11.990279819669539, lng: -77.00502151518249}, // Avenida Jorge Basadre
        {lat: -12.011144570077608, lng: -77.01137454586737}, // Avenida Las Flores de Primavera
        {lat: -11.97679818354223, lng: -76.99172593237475}, // Avenida Santa Rosa de Lima
        {lat: -11.959343084236208, lng: -76.98732788819677}, // Avenida Wiesse
        {lat: -11.981622973551854, lng: -77.0055766188815}  // Avenida Próceres de la Independencia
    ];

    // Crea una línea que pasa por todas las avenidas.
    const avenidasLinea = new google.maps.Polyline({
        path: avenidasCoords,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    // Añade la línea al mapa.
    avenidasLinea.setMap(map);
};
