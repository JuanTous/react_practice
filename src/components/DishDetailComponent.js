import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

  function RenderDish({dish}) {
    if (dish === null) {
        return <div></div>;
    } else {
        return (
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle> {dish.name}</CardTitle>
                  <CardText> {dish.description} </CardText>
                </CardBody>
              </Card>
            </div>
          );
    }
  }

  function RenderComments({comments}) {
    if (comments.length === 0) {
      return <div></div>;
    } else {
        const ret = comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  <b>-- {comment.author}, &nbsp;</b>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }).format(new Date(comment.date))}
                </p>
              </li>
            );
          });

        return (
        <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className="list-unstyled">{ret}</ul>
        </div>
        );
    }
  }

  const DishDetail = (props) => {
    const dish = props.dish;

    if (dish == null) {
      return <div></div>;
    }

    return (
      <div className="row">
        <RenderDish dish={dish} />
        <RenderComments comments={dish.comments} />
      </div>
    );
  }


export default DishDetail;