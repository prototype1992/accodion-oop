// класс панели аккордеона
class Pane {
  constructor(title, accordeon) {
    this.title = title;

    this.element = document.createElement('div');
    this.element.classList.add('pane');

    this.header = document.createElement('div');
    this.header.classList.add('pane__header');
    this.element.appendChild( this.header );

    this.content = document.createElement('div');
    this.content.classList.add('pane__content');
    this.element.appendChild( this.content );

    // добавляем в аккордеон
    accordeon.appendChild( this.element );

    // Вызываем изменение заголовка
    console.log(title);
    this.setTitle(title);

    // event click
    this.header.addEventListener('click', (e)=> {
      e.preventDefault();
      this.content.classList.toggle('pane__content--toggle');
    })
  }

  setTitle(title) {
    this.header.textContent = title;
  }

  setContent(content) {
    this.content.textContent = content;
  }
}

// класс аккордеона
class Accordeon {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('accordeon');
    document.body.appendChild( this.element );
  }
  addPane(title) {
    return new Pane(title, this.element);
  }
}

// создаем экземпляр класса Accordeon
let accordeon = new Accordeon();
let pane1 = accordeon.addPane('Панель 1');
let pane2 = accordeon.addPane('Панель 2');
let pane3 = accordeon.addPane('Панель 3');
pane1.setContent('Содержимое панели 1 очень длинно написано мною');
pane2.setContent('Содержимое панели 2 очень длинно написано мною');
pane3.setContent('Содержимое панели 3 очень длинно написано мною');

