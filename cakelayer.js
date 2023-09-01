function selectLayer(layerType, layerId) {
    const layer = document.getElementById(layerId);
    layer.className = "cake-layer " + layerType;
}

function toggleMiddleLayer() {
    const middleLayer = document.getElementById("middle-layer");
    middleLayer.classList.toggle("cookie-crunch");
}
