import { Input, Row, Button } from 'antd'
import React from 'react'

const SocialMedia = () => {
  return (
    <div>
           <Row justify='space-around'>
            <b>FaceBook</b>
                  <Input placeholder='Add Link'/>
                  <Button>Save</Button>
                </Row>
                <Row justify='space-around'>
            <b>Twitter</b>
                  <Input placeholder='Add Link'/>
                  <Button>Save</Button>
                </Row>
                <Row justify='space-around'>
            <b>Instagram</b>
                  <Input placeholder='Add Link'/>
                  <Button>Save</Button>
                </Row>
                <Row justify='space-around'>
            <b>Linkedin</b>
                  <Input placeholder='Add Link'/>
                  <Button>Save</Button>
                </Row>
    </div>
  )
}

export default SocialMedia