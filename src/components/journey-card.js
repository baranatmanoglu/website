import { Markdown } from '@/components/markdown'

export const JourneyCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="word-break-word font-semibold">{title}</span>
      {description && <Markdown className="word-break-word m-0 block w-full overflow-hidden">{description}</Markdown>}
      {image?.url && (
        <div className="mt-2 overflow-hidden rounded-xl">
          <img
            src={image.url}
            alt={image.title || image.description}
            width={image.width}
            height={image.height}
            loading="lazy"
            className="animate-reveal"
          />
        </div>
      )}
    </div>
  )
}
