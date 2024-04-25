import { Form, Input, message } from 'antd'
import './App.css'
import FormItem from 'antd/es/form/FormItem'
import axios from 'axios'
const API = axios.create({baseURL:"http://127.0.0.1:4000"}) 

function App() {
  const onFinishHandler = async (value) => {
    const res = await API.post('/user', value)
    if (res) {
      console.log(res);
    }
  }
  return (
    <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
          <h3 className='text-center'>Login</h3>
          <FormItem label='email' name='email'>
            <Input type='email' required />
          </FormItem>
          <FormItem label='Password' name='password'>
            <Input type='password' required />
          </FormItem>
          <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
      </div>
    </>
  );
}

export default App;
