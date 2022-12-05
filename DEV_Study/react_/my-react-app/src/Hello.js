import React from 'react';
import { Button, FormGroup, Input } from '@mui/material';

// class Hello extends React.Component {
//     render() {
//         const {name, color, age} = this.props;

//         return (
//             <div className='user-info'>
//                 안녕 나는
//                 <span className='user-name'>{name}라고 해</span><br />
//                 <span className='user-color'>{color}색을 좋아해</span><br />
//                 <span className='user-age'>나이는 {age} 살이야</span>
//                 <Button variant='contained' color='error'>Hello</Button>
//             </div>)
//     }
// }
function Gugudan(props) {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [res, setRes] = React.useState('');
    const [value, setValue] = React.useState('');
    
    return (
        <div className='gugudan-wrap'>
            <div className='gugudan-text'>
                {first} 곱하기 {second} 는 ?
            </div>
            <FormGroup>
                <Input value={value} placeholder='입력' size="small" fullWidth={false} onChange={(e) => setValue(e.target.value)} />
                <Button variant='text' size='small' onClick={(e) => {
                                    e.preventDefault();

                                    if(value === parseInt(first) * parseInt(second)) {
                                        console.log(first, second);
                                        setFirst(Math.ceil(Math.random() * 9));
                                        setSecond(Math.ceil(Math.random() * 9));
                                        setValue('');
                                        setRes("정답");
                                    }else {
                                        setFirst(Math.ceil(Math.random() * 9));
                                        setSecond(Math.ceil(Math.random() * 9));
                                        setValue('');
                                        setRes("땡");
                                    }
                }}>곱!</Button>
            </FormGroup>
            <span>{res}</span>
        </div>
    )
}
export default Gugudan;