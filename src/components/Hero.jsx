import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 150vh;
  }
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 900px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 67px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;


`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;

    /* @keyframes animate {
    to {
      transform: translateY(20px);
    }
  } */
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  
`;

const Hero = () => {
  return (
    <Section>
        <Navbar />
        <Container>
            <Left>
                <Title>Think. Make. Solve.</Title>
                <WhatWeDo>
                    <Line src="src/img/line.png" />
                    <Subtitle>What we Do</Subtitle>
                </WhatWeDo>
                <Desc>
                we enjoy creating delightful, human-centered digital experiences.
                </Desc>
                <Button>Learn more</Button>
            </Left>
            <Right>
                <Canvas >
                    <OrbitControls enableZoom={false}  />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 3, 1]} />
                    <Sphere args={[1, 100, 200]} scale={2.4}>
                        <MeshDistortMaterial
                          color="#3d1c56"
                          attach="material"
                          distort={0.5}
                          speed={2}
                        />
                    </Sphere>
                </Canvas>
                <Img src="src/img/moon.png" />
            </Right>
        </Container>
    </Section>
  )
}

export default Hero