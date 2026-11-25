# Local project demos

Copy your project demo videos into this folder. Filenames are case-sensitive
on Linux/Vercel and must match the paths in `src/data/portfolio.ts`:

- `smartca.mp4`
- `arabic-customer-intelligence.mp4`
- `garbage-classification.mp4`
- `equitylens.mp4`
- `housing-price-forecasting.mp4`
- `speech-classification.mp4`
- `yelp-sentiment-analysis.mp4`

MP4 and WebM files are supported. To use WebM, update that project's `video`
path in the centralized portfolio data. The video player loads metadata only
when a project is near the viewport and shows a “Demo Video Coming Soon”
placeholder when a file is missing.

Video files are ignored by Git by default so large demos are not accidentally
committed or bundled into a Vercel deployment. For production demos, prefer
external video hosting; small files can be explicitly added to Git if desired.
