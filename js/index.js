pageLoaded.innerHTML = (new Date()).toLocaleTimeString();
btn.addEventListener('click', makeAjax);

function makeAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var clientData = JSON.parse(xhr.responseText);
            clientName.innerHTML = clientData.name;
            clientAddress.innerHTML = clientData.address;
        }
    }
    xhr.open('GET', 'data.json', true);
    xhr.send();
}