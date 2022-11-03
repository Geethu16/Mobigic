import "./App.css";
import { useState } from "react";
import { transpose } from "mathjs";
function App() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const [ar, setAr] = useState([[]]);
  const [text, setText] = useState("");
  const col = (n, m) => {
    let a = [];
    for (let i = 0; i < m; i++)
      a[i] = (
        <td style={{ height: "50px" }}>
          <input type="text" maxLength="1" id={`c${n}${i}`}></input>
        </td>
      );
    return a;
  };
  const table = (n, m) => {
    let a = [];
    for (let i = 0; i < n; i++) {
      a[i] = (
        <tr style={{ width: "20%" }} id={`r${i}`}>
          {col(i, m)}
        </tr>
      );
    }

    return <>{a}</>;
  };
  const create = () => {
    let n = document.getElementById("n").value;
    let m = document.getElementById("m").value;
    if (n.length == 0 || m.length == 0) return;
    setM(m);
    setN(n);
  };
  const find = (e) => {
    console.log(document.getElementById("table"));
    let a = [];
    for (let i = 0; i < n; i++) {
      a[i] = [];
      for (let j = 0; j < m; j++) {
        a[i][j] = document.getElementById(`c${i}${j}`).value;
        let ele = document.getElementById(`c${i}${j}`);
        ele.style.color = "black";
      }
    }
    console.log("gskkk", a);
    let find = document.getElementById("find").value;
    if (find.length > n && find.length > m) {
      setText("not found");
      return;
    }
    // if (find.length <n && find.length > m) {

    // }
    for (let i = 0; i < n; i++) {
      let flag = 0,
        ele;
      ele = a[i].join("");
      console.log(ele, find);
      if (ele.includes(find)) {
        let fs = ele.indexOf(find);
        let ls = fs + find.length;
        console.log(ls, fs);
        for (let k = fs; k < ls; k++) {
          let ele = document.getElementById(`c${i}${k}`);
          ele.style.color = "red";
        }
      }
    }
    let b = transpose(a);
    for (let i = 0; i < m; i++) {
      let flag = 0,
        ele;
      ele = b[i].join("");
      console.log(ele, find);
      if (ele.includes(find)) {
        let fs = ele.indexOf(find);
        let ls = fs + find.length;
        console.log(ls, fs);
        for (let k = fs; k < ls; k++) {
          let ele = document.getElementById(`c${k}${i}`);
          ele.style.color = "red";
        }
      }
    }
    if (m == n) {
      let temp1 = "",
        temp2 = "";
      for (let i = 0; i < n; i++) {
        temp1 += a[i][i];
      }
      for (let i = 0; i < n; i++) {
        temp2 += a[n - 1][n - i];
      }
      if (temp1.includes(find)) {
        let fs = temp1.indexOf(find);
        let ls = fs + find.length;
        console.log(ls, fs);
        for (let k = fs; k < ls; k++) {
          let ele = document.getElementById(`c${k}${k}`);
          ele.style.color = "red";
        }
      }
      // if (temp2.includes(find)) {
      //   let fs = temp1.indexOf(find);
      //   let ls = fs + find.length;
      //   console.log(ls, fs);
      //   for (let k = fs; k < ls; k++) {
      //     let ele = document.getElementById(`c${k}${k}`);
      //     ele.style.color = "red";
      //   }
      // }
    }
  };
  return (
    <div className="App">
      <input type="number" placeholder="N" id="n" />
      <input type="number" placeholder="M" id="m" />
      <button onClick={create}>Create</button>
      <br />
      <br />
      <br />
      <br />
      <table style={{ width: "50%", position: "center" }} id="table">
        {table(n, m)}
      </table>
      <br />
      <br />
      <div></div>
      <input type="text" placeholder="find" id="find" />
      <button onClick={find}>find</button>
      {text}
    </div>
  );
}

export default App;
