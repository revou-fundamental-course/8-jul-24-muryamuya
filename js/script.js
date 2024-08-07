function hitungBMI() { // function to change element based on calculation
    let gender = document.getElementsByName("gender").value; // not yet used
    let weightBMI = document.getElementById("weightBMI").value;
    let ageBMI = document.getElementById("ageBMI").value;
    let heightBMI = document.getElementById("heightBMI").value;
    if (ageBMI < 18) { // show message invalid calculation
        alert("Harus 18 tahun keatas agar perhitungan valid");
    }
    else { // show calculation
        try {
            let calculated = weightBMI / ((heightBMI / 100) ^ 2)
            showElementClass("displayHasil");
            document.getElementById("hasilBMI").innerHTML = calculated.toFixed(1).toString();
            if (calculated.toFixed(1) < 18.5) {
                document.getElementById("kategoriBMI").innerHTML = "Anda kekurangan berat badan";
            }
            else if (calculated.toFixed(1) < 25) {
                document.getElementById("kategoriBMI").innerHTML = "Anda memiliki berat badan ideal";
            }
            else if (calculated.toFixed(1) < 30) {
                document.getElementById("kategoriBMI").innerHTML = "Anda kelebihan berat badan";
            }
            else {
                document.getElementById("kategoriBMI").innerHTML = "Anda tergolong Obesitas";
            }
        } catch (error) {
            console.log(error);
        }
    }
}

function resetAll() { // clear all fields
    hideElementClass("displayHasil");
    document.getElementById("hasilBMI").innerHTML = null; // clear element
    document.getElementById("kategoriBMI").innerHTML = null;
}

function hideElementClass(className) { // hide class css
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.classList.add("hidden")
    }
}

function showElementClass(className) { // show class css
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.classList.remove("hidden")
    }
}