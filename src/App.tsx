import React, { useState } from 'react';
import { Avatar, Button, Card, Carousel } from 'antd';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const GapList = [4, 3, 2, 1];

const App: React.FC = () => {
  const [user, setUser] = useState(UserList[0]);
  const [gap, setGap] = useState(GapList[0]);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  }

  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
  };

  const changeGap = () => {
    const index = GapList.indexOf(gap);
    setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
  };

  const { Meta } = Card;

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '460px',
    color: '#fff',
    lineHeight: '460px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  return (
    <>
    <Card style={{ width: 750 }}
    >
      <Meta title="Shazam" description="Billy Batson" style={{border:40,paddingLeft:270, position:"absolute", fontSize:20}}/>
      <Avatar shape="square" style={{verticalAlign: 'middle', width:230, height:200, backgroundColor:"#9f2e33"}} gap={gap}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-ns85PsQxIWAyb5WS5xvFocdN9l7LKGIPg&usqp=CAU" alt="Shazam" width={300} height={200} />
      </Avatar>
      <Button
        size="small"
        style={{ margin: '0 16px', verticalAlign: '' }}
        onClick={changeUser}
      >
        Super fuerza
      </Button>
      <Button size="small" style={{ margin: '0 16px', verticalAlign: 'middle' }} onClick={changeGap}>
        Super velocidad 
      </Button>
      <Button size="small" style={{ margin: '0 16px',verticalAlign: 'middle' }} onClick={changeGap}>
        Lanza rayos
      </Button>
      
      <Carousel afterChange={onChange} style={{paddingTop:50}}>
      <div>
        <h3 style={contentStyle}><img src="https://www.akiracomics.com/imagenes/poridentidad?identidad=486e1eb6-6765-443a-bf02-8b087255e7f6&ancho=850&alto=" alt="Shazam School" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://cdn.colombia.com/sdi/2022/07/25/shazam-fury-of-the-gods-primer-trailer-comic-con-2022-zachary-levi-dc-comics-1051176.jpg" alt="Shazam Movie" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://sm.ign.com/ign_es/feature/s/shazam-exp/shazam-explained-who-is-the-dc-hero_puyn.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://dam.smashmexico.com.mx/wp-content/uploads/2021/10/shazam-explicacion-nombre-poderes-dioses-griegos-cover.jpg" alt="" /></h3>
      </div>
    </Carousel>
      </Card>
    </>
  );
};

export default App;