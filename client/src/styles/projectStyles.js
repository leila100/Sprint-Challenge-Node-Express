import styled from "styled-components"

export const ProjectsWrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  border: 1px solid #3f0122;
  border-radius: 5px;
  width: 25%;
  font-size: 1.8rem;
  padding: 10px;
  margin: 3%;
  height: 100%;
`

export const InfoWrapper = styled(ProjectWrapper)`
  width: 80%;
  li {
    margin-top: 10px;
  }
`

export const Info = styled.div`
  margin-bottom: 15px;
  color: black;
  span {
    font-size: 2rem;
    color: #33ccff;
    width: 20%;
  }
  p {
    margin-top: 10px;
    overflow-wrap: break-word;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    li {
      margin-top: 10px;
    }
  }
`
