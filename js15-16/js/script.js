$(function(){

  var form = document.getElementById('form');
  var input = document.getElementById('textInput');

  form.addEventListener("submit", function(event){
    event.preventDefault();

    var query = input.value;
    if (query) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBwA0hRgFi1_F8hqv_gHAGpOq4AiGXg5cY&cx=003882030318145023107:-j2so4y5qvc&q=' + query, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
          alert(xhr.status + ': ' + xhr.statusText);
        } else {
          var response = JSON.parse(xhr.responseText);

          var result = document.createElement('ul');
          console.log(response);
          response.items.forEach(function(item, i){
            var li = document.createElement('li');
            li.innerHTML = '<a class="primaryLink" href="' + item.formattedUrl +
            '" title="' + item.formattedUrl +
            '" target="_blank">' + item.htmlTitle +
            '</a><br><a class="secondLink" href="' + item.formattedUrl +
            '" title="' + item.formattedUrl +
            '" target="_blank">' + item.displayLink +
            '</a><br><span class="content">' + item.htmlSnippet + '</span>';
            result.appendChild(li);
          });

          var wrapper = document.getElementsByClassName('wrapper')[0];
          wrapper.replaceChild(result, wrapper.firstChild);
        }
      };

      xhr.send();
    }
  });
/*Prototype*/
  var Human = function(params) {
    this.name = params.name;
    this.age = params.age;
    this.sex = params.sex;
    this.height = params.height;
    this.weight = params.weight;
  };

  Human.prototype.eat = function () {
    console.log(this.name + ' is eating');
  };

  var Worker = function(params) {
    Human.apply(this, arguments);
    this.job = params.job;
    this.salary = params.salary;
  };

  var Student = function(params) {
    Human.apply(this, arguments);
    this.course = params.course;
  };

  Worker.prototype = Object.create(Human.prototype);
  Student.prototype = Object.create(Human.prototype);

  Worker.prototype.work = function (how) {
    console.log(this.name + ' works ' + how);
  };

  Student.prototype.watchTVShows = function (tvShowName) {
    console.log(this.name + ' is watching ' + tvShowName);
  };

  user1 = new Worker({
    name: 'John Constantine',
    age: 33,
    sex: 'male',
    height: 185,
    weight: 70,
    job: 'builder'
  });

  user2 = new Worker({
    name: 'Angela Isabel',
    age: 30,
    sex: 'female',
    height: 160,
    weight: 62,
    job: 'doctor'
  });

  user3 = new Student({
    name: 'Chess',
    age: 18,
    sex: 'male',
    height: 169,
    weight: 60,
    course: '1314'});

  user4 = new Student({
    name: 'Beeman',
    age: 21,
    sex: 'male',
    height: 166,
    weight: 89,
    course: '1111'});

  console.log(user1);
  user1.eat();
  user1.work('hard');

  console.log(user2);
  user2.eat();
  user2.work('carelessly');

  console.log(user3);
  user3.eat();
  user3.watchTVShows('MD House');

  console.log(user4);
  user4.eat();
  user4.watchTVShows('Game of Thrones');

});
