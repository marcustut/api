package logic

import (
	"context"

	"api/rpc/shorturl/internal/svc"
	"api/rpc/shorturl/shorturl"

	"github.com/zeromicro/go-zero/core/logx"
)

type ExpandLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewExpandLogic(ctx context.Context, svcCtx *svc.ServiceContext) *ExpandLogic {
	return &ExpandLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *ExpandLogic) Expand(in *shorturl.ExpandReq) (*shorturl.ExpandResp, error) {
	resp, err := l.svcCtx.Model.FindOne(l.ctx, in.Shorten)
	if err != nil {
		return nil, err
	}

	return &shorturl.ExpandResp{
		Url: resp.Url,
	}, nil
}
