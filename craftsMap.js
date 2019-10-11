function initMap(){

    // Map options
    let options = {
        zoom:11,
        center:{lat:41.9973,lng:21.4280}
    }

    //  New Map

    let map = new google.maps.Map(document.getElementById('map'), options);

    //  Add Marker

    let marker = new google.maps.Marker({

        position:{lat:41.984225,lng:21.431336},
        map:map
    });

    

}