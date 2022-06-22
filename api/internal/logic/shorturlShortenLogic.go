package logic

import (
	"context"

	"api/api/internal/svc"
	"api/api/internal/types"
	"api/rpc/shorturl/transformer"

	"github.com/zeromicro/go-zero/core/logx"
)

type ShorturlShortenLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewShorturlShortenLogic(ctx context.Context, svcCtx *svc.ServiceContext) *ShorturlShortenLogic {
	return &ShorturlShortenLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *ShorturlShortenLogic) ShorturlShorten(req *types.ShortenReq) (*types.ShortenResp, error) {
	resp, err := l.svcCtx.Shorturl.Shorten(l.ctx, &transformer.ShortenReq{
		Url: req.Url,
	})
	if err != nil {
		return nil, err
	}

	return &types.ShortenResp{
		Shorten: resp.Shorten,
	}, nil
}
