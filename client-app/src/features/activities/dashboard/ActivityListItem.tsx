import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { Activity } from "../../../app/models/activities";

interface Props {
    activity: Activity
}

export default function ActivityListItem({ activity }: Props) {
    const [target, setTarget] = useState('');
    const { activityStore } = useStore();
    const { deleteActivity, loading } = activityStore;

    function handleDeleteActivity(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Item key={activity.id}>
            <Item.Content>
                <Item.Header as='a'>{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                    <div>{activity.description}</div>
                    <div>{activity.city}, {activity.venue}</div>
                </Item.Description>
                <Item.Extra>
                    <Button name={activity.id}
                        loading={loading && target === activity.id}
                        onClick={(e) => handleDeleteActivity(e, activity.id)}
                        floated='right'
                        content='Delete'
                        color='red' />
                    <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color='blue' />
                    <Label content={activity.category} />
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}