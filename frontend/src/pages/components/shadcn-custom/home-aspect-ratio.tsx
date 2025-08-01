import { AspectRatio } from "@/components/ui/aspect-ratio";

export function HomeAspectRatio() {
  return (
    <div className="w-full max-w-7xl">
      <AspectRatio ratio={16 / 5} className="bg-muted rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </div>
  );
}
