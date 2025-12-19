# Placeholder Images

This directory should contain placeholder images for the hero video cards.

## Required Images

- `clip-1.jpg` - 300x533px (9:16 aspect ratio)
- `clip-2.jpg` - 300x533px (9:16 aspect ratio)
- `clip-3.jpg` - 300x533px (9:16 aspect ratio)
- `clip-4.jpg` - 300x533px (9:16 aspect ratio)
- `clip-5.jpg` - 300x533px (9:16 aspect ratio)

You can use placeholder services like:
- https://placeholder.com
- https://via.placeholder.com
- https://picsum.photos

Or add your own vertical video thumbnails.

## Current Implementation

The hero section component uses these URLs as fallback:
```
assets/placeholders/clip-1.jpg
assets/placeholders/clip-2.jpg
assets/placeholders/clip-3.jpg
assets/placeholders/clip-4.jpg
assets/placeholders/clip-5.jpg
```

The component will also work with the placeholder.com URLs configured in the TypeScript file.

