package handler

import (
	"net/http"

	"api/api/internal/logic"
	"api/api/internal/svc"
	"api/api/internal/types"

	"github.com/zeromicro/go-zero/rest/httpx"
)

func ShorturlShortenHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.ShortenReq
		if err := httpx.Parse(r, &req); err != nil {
			httpx.Error(w, err)
			return
		}

		l := logic.NewShorturlShortenLogic(r.Context(), svcCtx)
		resp, err := l.ShorturlShorten(&req)
		if err != nil {
			httpx.Error(w, err)
		} else {
			httpx.OkJson(w, resp)
		}
	}
}
