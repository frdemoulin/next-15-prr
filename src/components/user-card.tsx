import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface UserCardProps {
    originalName: string;
}

const UserCard = ({ originalName }: UserCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{originalName}</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui blanditiis commodi nulla quasi recusandae eligendi aliquid magnam eveniet quisquam?</p>
            </CardContent>
            <CardFooter>
                <p className="text-slate-500 text-sm">Lorem, ipsum dolor.</p>
            </CardFooter>
        </Card>
    )
}

export default UserCard;