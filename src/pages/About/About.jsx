import React from 'react'
import { Content, Social, Staff, StaffDescription, StaffHeader, StaffList, StaffMember, StaffTitle, Wrapper } from './About.styles'
import { Container, PageHeader, iconList } from '../../globalStyles'

import avatar1 from '../../assets/imgs/avatar1.jpg'
import avatar2 from '../../assets/imgs/avatar2.jpg'
import avatar3 from '../../assets/imgs/avatar3.webp'
import avatar4 from '../../assets/imgs/avatar4.webp'

export default function About() {

  const dataStaff = [
    {
      name: "Ben Urich",
      avatar: avatar1,
      ocupation: "Journalist",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas eligendi blanditiis commodi, amet optio eveniet itaque a molestiae, minus quis nam? Ipsa praesentium eveniet voluptatibus quidem vero? Distinctio, tempore?",
      facebook: "#!",
      twitter: "#!",
      instagram: "#!",
      linkedin: "#!",
    },
    {
      name: "Clark",
      avatar: avatar2,
      ocupation: "Journalist / Photographer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas eligendi blanditiis commodi, amet optio eveniet itaque a molestiae, minus quis nam? Ipsa praesentium eveniet voluptatibus quidem vero? Distinctio, tempore?",
      facebook: "#!",
      twitter: "#!",
      instagram: "#!",
      linkedin: "#!",
    },
    {
      name: "Lois Lane",
      avatar: avatar3,
      ocupation: "Blogger",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas eligendi blanditiis commodi, amet optio eveniet itaque a molestiae, minus quis nam? Ipsa praesentium eveniet voluptatibus quidem vero? Distinctio, tempore?",
      facebook: "#!",
      twitter: "#!",
      instagram: "#!",
      linkedin: "#!",
    },
    {
      name: "Jonah Jameson",
      avatar: avatar4,
      ocupation: "Blogger / Photographer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas eligendi blanditiis commodi, amet optio eveniet itaque a molestiae, minus quis nam? Ipsa praesentium eveniet voluptatibus quidem vero? Distinctio, tempore?",
      facebook: "#!",
      twitter: "#!",
      instagram: "#!",
      linkedin: "#!",
    },
  ]

  return (
    <Wrapper>
      <PageHeader>
        <h2>About us</h2>
      </PageHeader>
      <Container>
        <Content>
          <h1>Behold Travel Blog</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique possimus iste mollitia quaerat consectetur nesciunt placeat in inventore incidunt esse tenetur aliquid accusamus ipsam ipsa, perspiciatis dicta commodi quas quod.</p>
        </Content>
        <Staff>
          <StaffTitle>
            Our Team 
          </StaffTitle>
          <StaffList>
            {dataStaff.map((item, key) => (
              <StaffMember key={key}>
                <img src={item.avatar} alt="" />
                <StaffHeader>
                  <h2>{item.name}</h2>
                  <span>{item.ocupation}</span>
                </StaffHeader>
                <StaffDescription>
                  {item.description}
                </StaffDescription>
                <Social>
                  <ul>
                    <li>
                      <a href={item.facebook}>{iconList.facebook}</a>
                    </li>
                    <li>
                      <a href={item.instagram}>{iconList.instagram}</a>
                    </li>
                    <li>
                      <a href={item.twitter}>{iconList.twitter}</a>
                    </li>
                    <li>
                      <a href={item.linkedin}>{iconList.linkedin}</a>
                    </li>
                  </ul>
                </Social>
              </StaffMember>
            ))}
          </StaffList>
        </Staff>
      </Container>
    </Wrapper>
  )
}
