from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import auth, brand

app = FastAPI(title="Brima Agency API")

# Allow frontend origin during development; adjust for production
origins = [
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    return {"status": "ok"}


app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(brand.router, prefix="/brand", tags=["brand"])

