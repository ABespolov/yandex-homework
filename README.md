
## Project link:
https://yhomework.herokuapp.com/
##
Чтобы запустить проект:
```
yarn
cd client
yarn
cd ..
sudo yarn run dev
```
Модульные тесты:
```
npm test
cd client
sudo yarn run test 
```
Интеграционные тесты:
```
cd client
selenium-standalone start
sudo yarn run dev
npx hermione ./hermione/simple.hermione.js
```