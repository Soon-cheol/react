// import React, {Component} from 'react'
// class EventPractice extends Component {
//   render(){
//     <div>
//      <h1>이벤트 연습</h1>
//      <input type="text" name="message"
//       placeholder="아무거나 입력해 보세요"
//       onChange={
//           (e)=>{
//               console.log(e.target.value);
//
//               // console.log('first event', e.target.value); // => nullified object.
//               // console.log(event.type); // => "click"
//               // const eventType = event.type; // => "click"
//               // setTimeout(function() {
//               //   console.log('after event',event.type); // => null
//               //   console.log('after const event',eventType); // => "click"
//             //   }, 0);
//             // event.persist() 메서드를 사용하면 사라지지 않지만해당 이벤트 객체가 메모리에 지속적으로 남아 성능 문제가 발생할 수 있다.
//           }
//       }
//       />
//     </div>
//   }
// }
// export default EventPractice;