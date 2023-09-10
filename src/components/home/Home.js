import React, { useState } from 'react';
import { Button, Row, Col, Input, CardBody, CardTitle, Card, Form,InputGroup} from "reactstrap";

export default function Home() {
  const [foodName, setFoodName] = useState('');
  const [meals, setMeals] = useState([]);


  const handleChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
if(foodName){
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.meals) {
      setMeals(data.meals);         
    } else {
      setMeals([]);
      alert('No meals found for that search term');
    }
  })
}else{
  alert("Enter a food Name to search")
}
    
  }
  return (
    <div style={{ margin: "20px 10px",padding:"10px 20px" }}>
      <h1>Meal Search</h1>
      <Form onSubmit={handleSubmit}>
      <InputGroup style={{ margin: "20px 10px",padding:"10px 20px" }}>
      <Input
      style={{padding:"10px 20px" }} 
      type="text"
      placeholder="Enter a food name"
      value={foodName}
      onChange={handleChange}/>
      <Button 
      color="info" 
      style={{padding:"10px 20px" }}
      >
      Search
      </Button>
    </InputGroup>        
      </Form>

      <div className="meals">
        <Row
          lg="4"
          md="3"
          sm="1"
        >
          {meals.map((meal) => (
            <Col className="bg-light border" key={meal.idMeal}>
              <Card
                style={{
                  width: '100%',
                  height: '100%'
                }}>
                <CardTitle tag="h4" style={{ margin: "20px 0" }}>
                  {meal.strMeal}
                </CardTitle>
                <CardBody>
                  <img
                    alt={meal.strMeal}
                    src={meal.strMealThumb}
                    width="100%"
                  />

                  <Button 
                  color="primary"
                    size="lg" 
                    style={{ margin: "20px 10px",padding:"10px 20px" }} 
                    onClick={() =>
                      window.open(`${meal.strYoutube}`, "_blank")}
                    >
                    watch
                  </Button>

                </CardBody>
              </Card>
            </Col>

          ))}
        </Row>
      </div>
    </div>
  )
}
