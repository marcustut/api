package logic

import (
	"context"

	"api/api/internal/svc"
	"api/api/internal/types"
	"api/rpc/shorturl/transformer"

	"github.com/zeromicro/go-zero/core/logx"
)

type ShorturlExpandLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewShorturlExpandLogic(ctx context.Context, svcCtx *svc.ServiceContext) *ShorturlExpandLogic {
	return &ShorturlExpandLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *ShorturlExpandLogic) ShorturlExpand(req *types.ExpandReq) (*types.ExpandResp, error) {
	resp, err := l.svcCtx.Shorturl.Expand(l.ctx, &transformer.ExpandReq{
		Shorten: req.Shorten,
	})
	if err != nil {
		return nil, err
	}

	return &types.ExpandResp{
		Url: resp.Url,
	}, nil
}
