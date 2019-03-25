
## Project link:
https://yhomework.herokuapp.com/
##
Так как проект состоит из большого количества повторяющихся элементов, я сразу решил сразу использовать React для шаблонизации. Было решено делать компоненты максимально независимыми и использовать css-модули, а также Sass для использования переменных и миксинов. Например, для плавного изменения заголовков без брэйкпоинтов.
```sass
@mixin smoothResize($property, $valueMin, $valueMax) {
  #{$property}: calc(#{$valueMin + 'px'} + (#{$valueMax} - #{$valueMin}) *
  (100vw - #{$screenMin + 'px'}) / (#{$screenMax} - #{$screenMin}));
  @media screen and (min-width: #{$screenMax + 'px'}){
    #{$property}:  #{$valueMax + 'px'};
  }
  @media screen and (max-width: #{$screenMin + 'px'}){
    #{$property}:  #{$valueMin + 'px'};
  }
}
```
Сетка целиком построена на css grid и рендерится динамически, при отрисовке задаётся ```grid-column: span n;``` на основе данных о ширине карточки и ``` note.current.style.gridRow = `span ${rows}`;``` на основе высоты контента в карточке.

Для определения количества прошедшего времени от момента создания карточки и напоминания, используется библиотека ```date-fns```.

Планируется доработка компонентов, добавление состояний, улучшение accessibility, рефакторинг существующего кода.
