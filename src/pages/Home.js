import React from 'react';
import "./home.css";



function Home() {
  const images=[
    "https://aws-tiqets-cdn.imgix.net/images/content/79ccef932254482cae18cb5cc1de5880.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=261b406150f17eabefe4fb0b3953a169&w=800&h=800&dpr=2"
    ,
    "https://aws-tiqets-cdn.imgix.net/images/content/d6e19e9bd0a84e9b82a29ebdaf9ef623.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=be27ff8b03283cac6909b73795ed38fa&w=800&h=800&dpr=2"
    ,
    "https://aws-tiqets-cdn.imgix.net/images/content/002d70eebc0a4fec80b87305808cc9b5.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=4959ea1b292d15b61498a5c6c4e0291d&w=800&h=800&dpr=2"
    ,
    "https://aws-tiqets-cdn.imgix.net/images/reviews/c6bcaf77c93847a390eb800a4ce806f4.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=6badf93f3be4ebb0200e88142837a1c6&dpr=2"
    ,
    "https://aws-tiqets-cdn.imgix.net/images/content/6f8bca3f840b432ab038d59523925325.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=8d1ab5b49f8fdb622ba017a23e0511bc&dpr=2"

 ];


  return (
    <div className='home'>
      <div className='title'>
        <p style={{fontSize:25,color:"#4f3bba", marginBottom:15, fontWeight:'bold'}}> March 13, 2021 </p>
        <p style={{fontSize:20, marginBottom:10}}> <b>Lastminute.com London Eye: </b>  Standard Entrance</p>
        <hr className='line' /> 
        <p style={{fontSize:15, display:'flex'}}> <b>London </b> &nbsp;&nbsp;&nbsp; <div className='circle'> </div> &nbsp;&nbsp;  Tour</p>
      </div>
      <div className='images'>
        <img src={images[0]} alt='image1' className='img1'></img>
        <div style={{flexDirection:"column"}}>
          <img src={images[1]} alt='image2' className='img2'></img>
          <img src={images[2]} alt='image3' className='img3'></img>
        </div>
        <img src={images[3]} alt='image4' className='img4'></img>
        <img src={images[4]} alt='image5' className='img5'></img>
      </div>
      <div style={{display:'flex'}}>
        <div>
          <div className='text-box' style={{width:620,height:120}}>
            <p className='subtitle'> Covid-19 </p>
            <hr className='line' /> 
            <p style={{fontSize:15}}>Guests must wear face masks at all times.</p>
          </div>
          <div style={{padding:15, marginTop:20,width:620 }}>
            <p className='subtitle'>Description</p>
            <hr className='line' />
            <p style={{fontSize:15, lineHeight:2}}> Once the world's tallest observation wheel, the London Eye has 32 sealed and air-conditioned capsules, each holding up to 25 people. It is located near Waterloo and the River Thames. A full rotation on the Eye takes 30 minutes and gives you a 360° view of London.With over one million visitors a year, The SEA LIFE London Aquarium is one of the UK's premier marine life attractions. Conveniently located on the ground floor of County Hall on the South Bank of the River Thames in central London, it's just a stone's throw from the London Eye and a great way to relax amidst the buzz of London.</p> 
          </div>
        </div>
        <div style={{marginLeft:10}}>
          <div className='text-box' style={{width:350,height:120}}>
            <p className='subtitle'> Duration </p>
            <hr className='line' /> 
            <p style={{fontSize:15}}>7 days, 8 nights</p>
          </div>
          <div className='text-box' style={{width:350,height:200}}>
            <p className='subtitle'> Location </p>
            <hr className='line' /> 
            <div style={{display:"flex", lineHeight:2, flexDirection:'row', justifyContent:"space-between"}}>
              <p style={{fontSize:13}}><b>START:</b> <br/> Riverside Building, County Hall, London SE1 7PB, United Kingdom</p>
              <p style={{fontSize:13}}> <b>END:</b> <br/>Riverside Building, County Hall, London SE1 7PB, United Kingdom</p>
            </div>
          </div>
          <div style={{display:"flex"}}>
            <div className='text-box' style={{width:170,height:150, marginRight:10}}>
              <p className='subtitle'> Price </p>
              <hr className='line' />   
              <div style={{display:"flex" , justifyContent:"space-between",lineHeight:2}}>
              <p style={{fontSize:13}}>Adult:</p>
              <p style={{fontSize:13, fontWeight:'bold'}}>1.980 e</p>
              </div>
              <hr style={{height:1, width:140, borderColor:"#fff"}}/>
              <div style={{display:"flex", justifyContent:"space-between",lineHeight:2}}>
              <p style={{fontSize:13}}>Senior:</p>
              <p style={{fontSize:13, fontWeight:'bold'}}>2.000 e</p>
              </div>
              <hr style={{height:1, width:140, borderColor:"#fff"}}/>
              <div style={{display:"flex", justifyContent:"space-between",lineHeight:2}}>
              <p style={{fontSize:13}}>Child:</p>
              <p style={{fontSize:13, fontWeight:'bold'}}>1.200 e</p>
              </div> 
            </div>
            <div className='text-box' style={{width:170,height:150}}>
              <p className='subtitle'> Languages </p>
              <hr className='line' />
              <p style={{fontSize:13}}> English</p> 
              <hr style={{height:1, width:140, marginTop:7,marginBottom:7, borderColor:"#fff"}}/>
              <p style={{fontSize:13}}> Spanish</p> 
              <hr style={{height:1, width:140, marginTop:7,marginBottom:7, borderColor:"#fff"}}/>
            </div>
          </div>
        </div>  
      </div>  
      <div>
        <hr style={{height:1, width:980, marginTop:40, marginBottom:20, borderColor:"#fff"}} />
      </div>
      <div style={{ display:"flex",marginLeft:10}}>
        <div style={{padding:15, marginTop:20,width:620 }}>
          <p className='subtitle'>Tour Highlights</p>
          <hr className='line' />
          <p style={{fontSize:15, lineHeight:2}}> &#10004; The London Aquarium has one of the most extensive collections of marine life in Europe</p> 
          <p style={{fontSize:15, lineHeight:2}}> &#10004; Many of the creatures at the London Aquarium have been rescued or bred in captivity </p> 
          <p style={{fontSize:15, lineHeight:2}}> &#10004; Turtles, octopus, sharks, stingrays, crustaceans, jellyfish, multi-coloured fish and cute penguins can all be found here </p> 
          <p style={{fontSize:15, lineHeight:2}}> &#10004; The aquarium has over 65 displays in 14 themed zones spread over the three floors of the building</p> 
          <p style={{fontSize:15, lineHeight:2}}> &#10004; Interactive opportunities for visitors include public feeding, walk-through tunnels and touch tanks </p> 
        </div>
        <div>
          <div className='text-box' style={{width:350,height:180}}>
            <p className='subtitle'> Includes </p>
            <hr className='line' /> 
            <p style={{fontSize:15,lineHeight:2}}> &#10004; Bicycle (e-bike, road bike)</p>
            <p style={{fontSize:15,lineHeight:2}}> &#10004; Helmets</p>
            <p style={{fontSize:15,lineHeight:2}}> &#10004; Meals</p>
          </div>
          <div className='text-box' style={{width:350,height:120}}>
            <p className='subtitle'> Bookings </p>
            <hr className='line' /> 
            <p style={{fontSize:15,lineHeight:2}}>Guests may book up to three weeks in advance.</p>
          </div>
        </div>
      </div>
      <div>
        <hr style={{height:1, width:980, marginTop:40, marginBottom:60,borderColor:"#fff"}} />
      </div>
    </div>
  );
}

export default Home;
