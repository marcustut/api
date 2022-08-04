package handler

import (
	"net/http"

	"api/api/internal/logic"
	"api/api/internal/svc"
	"api/api/internal/types"

	"github.com/zeromicro/go-zero/rest/httpx"
)

func ShorturlExpandHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.ExpandReq
		if err := httpx.Parse(r, &req); err != nil {
			httpx.Error(w, err)
			return
		}

		l := logic.NewShorturlExpandLogic(r.Context(), svcCtx)
		resp, err := l.ShorturlExpand(&req)
		if err != nil {
			httpx.Error(w, err)
		} else {
			httpx.OkJson(w, resp)
		}
	}
}
