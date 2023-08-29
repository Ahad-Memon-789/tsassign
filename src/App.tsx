import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { InputComponent, ButtonComponent, IBComponent, BasicSwitchesComponent , BasicSelect } from './Components/Components';
import { ASTable } from './Components/Components';


function App() {

  //______________ Table Data _______________//

  let tableData = [
    {
      name: "Ahad",
      rollnum: 689,
      class: 9,
      isActive : "yes",
      f_name: <input type="text" placeholder='Enter Your Father Name' />,
    },
    {
      name: "Ali",
      rollnum: 118,
      class: 10,
      isActive : "yes",
      f_name: <input type="text" placeholder='Enter Your Father Name' />,
    },
    {
      name: "Adil",
      rollnum: 190,
      class: 11,
      isActive : "No",
      f_name: <input type="text" placeholder='Enter Your Father Name' />,
    },
  
    {
      name: "Haseeb",
      rollnum: 123,
      class: 10,
      isActive : "No",
      f_name: <input type="text" placeholder='Enter Your Father Name' />,
    },
  ]

  return (
    <div className="App">

      {/* Input Component */}

      {/* Heading */}
      <h3 className="text-center my-2 text-info-emphasis" style={{ fontFamily: "fantasy" }}>Inputs</h3>
      {/* Components */}
      <InputComponent inpType='text' inpValue='Enter Value' inpChange={() => { alert('You can only view it, not use it') }} />
      <InputComponent inpType='email' inpValue='abc@gmail.com' inpChange={() => { alert('You can only view it, not use it') }} />
      <InputComponent inpType='password' inpValue='Enter Password' inpChange={() => { alert('You can only view it, not use it') }} />
      <InputComponent inpType='date' inpValue='' inpChange={() => { alert('You can only view it, not use it') }} />

      {/* Button Component */}

      {/* Heading */}
      <h3 className="text-center my-2 text-info-emphasis" style={{ fontFamily: "fantasy" }}>Buttons</h3>
      {/* Components */}
      <ButtonComponent btnValue='Click Here' btnChange={() => { alert('Hello Handsome or Beauty') }} />
      <ButtonComponent btnValue='Watch Now' btnChange={() => { alert('Hello Handsome or Beauty') }} />
      <ButtonComponent btnValue='Send' btnChange={() => { alert('Hello Handsome or Beauty') }} />

      {/* Icon Button Component */}

      {/* Heading */}
      <h3 className="text-center my-2 text-info-emphasis" style={{ fontFamily: "fantasy" }}>Icon Button</h3>
      {/* Components */}

      <IBComponent btnValue='Click Here' btnChange={() => { alert("Hy Sir Basit It is Icon Button Component") }} />

      {/* Switch Component */}

      {/* Heading */}
      <h3 className="text-center my-2 text-info-emphasis" style={{ fontFamily: "fantasy" }}>Switch</h3>
      {/* Components */}

      <BasicSwitchesComponent switchChange={() => { alert('You can only view it, not use it') }} />

      {/* Table Component */}

      {/* Heading */}
      <h3 className="text-center my-4 text-info-emphasis" style={{ fontFamily: "fantasy" }}>Table</h3>

      <ASTable dataSource={tableData} cols={[
        {
          heading : "name",
          key : "name"
        },
        {
          heading : "f_name",
          key : "f_name"
        },
        {
          heading : "rollnum",
          key : "rollnum"
        },
        {
          heading : "class",
          key : "class"
        },
        {
          heading : "isActive",
          key : "isActive"
        },
      ]}/>
      
      {/* Select Component */}

      {/* Heading */}
      <h3 className="text-center my-4 text-info-emphasis" style={{ fontFamily: "fantasy" }}>Select</h3>


    <BasicSelect />
    </div>
  );
}

export default App;
