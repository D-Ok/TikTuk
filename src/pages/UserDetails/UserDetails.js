import { useParams } from "react-router";
import {useEffect} from "react";

const UserDetails = () => {
    let { uniqueId } = useParams();

    useEffect(() => {
        console.log(uniqueId)
        // Fetch post using the postSlug
    }, [uniqueId]);

    return (
        <div>User {nickname}</div>
    )
}

export default  UserDetails;