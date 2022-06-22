package logic

import (
	"context"

	"api/rpc/model"
	"api/rpc/shorturl/internal/svc"
	"api/rpc/shorturl/shorturl"

	"github.com/zeromicro/go-zero/core/hash"
	"github.com/zeromicro/go-zero/core/logx"
)

type ShortenLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewShortenLogic(ctx context.Context, svcCtx *svc.ServiceContext) *ShortenLogic {
	return &ShortenLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *ShortenLogic) Shorten(in *shorturl.ShortenReq) (*shorturl.ShortenResp, error) {
	key := hash.Md5Hex([]byte(in.Url))[:6]
	_, err := l.svcCtx.Model.Insert(l.ctx, &model.Shorten{
		Shorten: key,
		Url:     in.Url,
	})
	if err != nil {
		return nil, err
	}

	return &shorturl.ShortenResp{
		Shorten: key,
	}, nil
}
