// var reading = new Reading_Schema({sensorId: 1, temperature: 1, humidity: 4, luminosity: 5})
//initialising sensor data
//import Sensor_Info_Schema from Campus_Schema
var i;
for (i=1; i<=9; i++)
{
    var sensorObj = new Sensor_Info_Schema({
    sensorId  : i,
    zoneId : ((i/3)+1),
    floorNo : ((i/8)+1),
    buildingId : 100,
    campusName: 'ABC'});
    console.log('this is new sensorObj: ' + sensorObj);
    sensorObj.save(err => {
        if (err)
        {
            console.log('error while saving new sensorObj');
            console.log('error is: ' + err);
        }
        else
        {
            console.log('new sensor object saved successfuly');
        }
    });
}

//replace the reading object instantiation in server.js with this:
var i;
var dt = new Date(Date.now());
for (i=0; i<168; i++)
{
    dt.setHours( dt.getHours() + i);
    var sensorIdToPass = Math.floor(Math.random()*3) + 1;
    var humidityToPass = Math.floor(Math.random()*3) + 78;
    var temperatureToPass = Math.floor(Math.random()*13) + 21;
    var luminosityToPass = Math.floor(Math.random()*23001) + 78;
    setTimeout(() => {
        var reading = new Reading_Schema({timeStamp: dt,
        sensorId: sensorIdToPass,
        temperature: temperatureToPass,
        humidity: humidityToPass,
        luminosity: luminosityToPass})
    }, 5000);
}
