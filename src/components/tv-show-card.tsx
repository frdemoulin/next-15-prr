import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TvShow } from "@/types/tv-show";

const TvShowCard = ({ tvShow }: { tvShow: TvShow }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{tvShow.name}</CardTitle>
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

export default TvShowCard;